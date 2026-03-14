import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Drive",
  description: "Learn more about the Drive file storage application",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Drive</h1>
      
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p>
          Drive is a modern file storage and sharing application built with the latest 
          web technologies. It allows you to manage all your files for yourself and 
          your organization from a single account.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>📁 <strong>File Management</strong> - Upload, organize, and manage your files</li>
          <li>⭐ <strong>Favorites</strong> - Mark important files for quick access</li>
          <li>🗑️ <strong>Trash</strong> - Soft-delete with recovery option</li>
          <li>🔐 <strong>Authentication</strong> - Secure user accounts via Clerk</li>
          <li>🏢 <strong>Organization Support</strong> - Multi-tenant architecture for teams</li>
          <li>⚡ <strong>Real-time</strong> - Live updates via Convex</li>
          <li>📱 <strong>Responsive</strong> - Works on desktop and mobile</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technology Stack</h2>
        <p>
          Drive is built using a modern tech stack including Next.js 14, TypeScript, 
          Convex for backend services, and Clerk for authentication. The UI is styled 
          with Tailwind CSS and uses Radix UI primitives for accessibility.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Open Source</h2>
        <p>
          This is an open source project released under the MIT License. Feel free to 
          explore the code and adapt it for your own needs.
        </p>
      </div>
    </div>
  );
}
