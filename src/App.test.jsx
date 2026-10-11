import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './LanguageContext';

const renderApp = () =>
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

beforeEach(() => localStorage.setItem('lang', 'en'));

test('renders the hero and main sections', () => {
  renderApp();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/discover your potential/i);
  expect(screen.getByRole('heading', { name: /coach specializations/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /choose your plan/i })).toBeInTheDocument();
});

test('switches the whole page to Turkish and remembers it', () => {
  renderApp();
  fireEvent.click(screen.getAllByRole('button', { name: 'TR' })[0]);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/potansiyelini keşfet/i);
  expect(screen.getByRole('heading', { name: /paketini seç/i })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('tr');
  expect(localStorage.getItem('lang')).toBe('tr');
});

test('BMI calculator computes the category', () => {
  renderApp();
  fireEvent.change(screen.getByLabelText(/height \(cm\)/i), { target: { value: '170' } });
  fireEvent.change(screen.getByLabelText(/weight \(kg\)/i), { target: { value: '65' } });
  fireEvent.click(screen.getByRole('button', { name: /calculate/i }));
  expect(screen.getByText('22.5')).toBeInTheDocument();
  expect(screen.getByText('Healthy weight', { selector: '.tag' })).toBeInTheDocument();
});

test('sign-up errors follow the selected language', () => {
  renderApp();
  fireEvent.click(screen.getByRole('button', { name: /^sign up$/i }));
  expect(screen.getByText(/please accept the membership terms/i)).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: 'TR' })[0]);
  expect(screen.getByText(/lütfen üyelik koşullarını kabul et/i)).toBeInTheDocument();
});

test('login modal opens and switches role', async () => {
  renderApp();
  fireEvent.click(screen.getAllByRole('button', { name: /log in/i })[0]);
  const dialog = await screen.findByRole('dialog');
  fireEvent.click(screen.getByRole('tab', { name: /coach/i }));
  expect(dialog).toHaveTextContent(/log in as coach/i);
  fireEvent.keyDown(document, { key: 'Escape' });
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
});

test('schedule switches days and FAQ answers expand', () => {
  renderApp();
  fireEvent.click(screen.getByRole('tab', { name: /sunday/i }));
  expect(screen.getByRole('tabpanel')).toHaveTextContent(/stretch & recovery/i);
  expect(screen.getByRole('tabpanel')).not.toHaveTextContent(/boxing/i);

  const question = screen.getByText(/can i cancel or freeze my membership/i);
  const item = question.closest('details');
  expect(item).not.toHaveAttribute('open');
  fireEvent.click(question);
  expect(item).toHaveAttribute('open');
});

test('new sections are translated', () => {
  renderApp();
  fireEvent.click(screen.getAllByRole('button', { name: 'TR' })[0]);
  expect(screen.getByRole('heading', { name: /antrenörlerimizle tanış/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /haftalık ders programı/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sıkça sorulan sorular/i })).toBeInTheDocument();
  expect(screen.getByRole('tab', { name: /cumartesi/i })).toBeInTheDocument();
});

test('Süheyla is no longer on the page', () => {
  renderApp();
  expect(screen.queryByText(/süheyla/i)).not.toBeInTheDocument();
});
