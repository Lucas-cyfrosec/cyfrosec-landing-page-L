import { redirect } from 'next/navigation';

export const metadata = {
  title: 'CyfroSec',
};

export default function MaintenancePage() {
  redirect('https://app.cyfrosec.com/login');
}
