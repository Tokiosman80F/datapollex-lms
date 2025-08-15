// "use server"
import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/admin/courses">
                <a className={`block p-2 rounded ${router.pathname.includes('/courses') ? 'bg-gray-700' : ''}`}>
                  Courses
                </a>
              </Link>
            </li>
            <li>
              <Link href="/admin/users">
                <a className={`block p-2 rounded ${router.pathname.includes('/users') ? 'bg-gray-700' : ''}`}>
                  Users
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}