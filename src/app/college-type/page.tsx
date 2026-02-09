import { Suspense } from 'react';
import CollegeTypeContent from './components/CollegeTypeContent';

export default function CollegesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] px-6 py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Loading College Selection
          </h2>
          <p className="text-[#9ca3af]">
            Preparing your personalized college options...
          </p>
        </div>
      </main>
    }>
      <CollegeTypeContent />
    </Suspense>
  );
}