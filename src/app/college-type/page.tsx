'use client';

import { useEffect, useState } from 'react';
import CollegeTypeContent from './components/CollegeTypeContent';

export default function CollegesPage() {
  const [stream, setStream] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const params = new URLSearchParams(window.location.search);
    setStream(params.get('stream'));
  }, []);

  if (!isClient) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] px-6 py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Loading...
          </h2>
        </div>
      </main>
    );
  }

  return <CollegeTypeContent stream={stream} />;
}

export const dynamic = 'force-dynamic';