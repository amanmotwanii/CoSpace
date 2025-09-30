"use client";

import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';


export default function TermsPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setLastUpdatedDate(new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);


  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>CoSpace Finder Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            {lastUpdatedDate && <p>Last Updated: {lastUpdatedDate}</p>}
            <p>Welcome to CoSpace Finder! These Terms of Service ("Terms") govern your use of the CoSpace Finder website and mobile application ("Platform"). By accessing or using CoSpace Finder, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the platform.</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By using CoSpace Finder, you confirm that you have read, understood, and agreed to these Terms, along with our Privacy Policy. These Terms apply to all users, including space owners and customers.</p>
            
            <h2>2. Account Registration</h2>
            <p>To access certain features, you must register for an account.</p>
            <ul className="list-disc pl-6">
              <li>You agree to provide accurate, current, and complete information.</li>
              <li>You are responsible for maintaining the confidentiality of your account.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
            </ul>

            <h2>3. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Violate any applicable laws or regulations.</li>
              <li>Post or transmit any harmful, abusive, or misleading content.</li>
              <li>Use the platform to interfere with or disrupt services.</li>
              <li>Attempt unauthorized access to other accounts.</li>
            </ul>

            <h2>4. Service Overview</h2>
            <p>CoSpace Finder connects users with coworking space providers. We do not own or manage any listed spaces. All bookings and agreements are made directly between users and space providers.</p>

            <h2>5. Bookings and Payments</h2>
            <ul className="list-disc pl-6">
              <li>All bookings must be made through the platform.</li>
              <li>Payments are processed securely via our integrated payment system.</li>
              <li>You agree to the pricing, cancellation, and refund policies set by the space provider.</li>
            </ul>

            <h2>6. Fees and Charges</h2>
            <p>CoSpace Finder may charge service or convenience fees. These will be clearly displayed before confirmation. All payments are final unless otherwise stated.</p>

            <h2>7. Cancellations and Refunds</h2>
            <p>Cancellation and refund policies vary by space provider. Please read the policy for each listing before booking. CoSpace Finder is not responsible for provider policy enforcement.</p>

            <h2>8. Intellectual Property</h2>
            <p>All platform content, including logos, UI elements, and code, is owned by CoSpace Finder or its licensors. You may not reproduce, modify, or distribute any part of the platform without permission.</p>

            <h2>9. Privacy</h2>
            <p>Your use of CoSpace Finder is also governed by our Privacy Policy. By using the platform, you consent to our data practices as outlined in that policy.</p>

            <h2>10. Termination</h2>
            <p>We may suspend or terminate your access to the platform without notice if you violate these Terms or misuse the platform. You may also delete your account at any time.</p>

            <h2>11. Limitation of Liability</h2>
            <p>CoSpace Finder provides services “as is.” We do not guarantee uninterrupted or error-free service. CoSpace Finder is not liable for damages, losses, or disputes arising from user interactions or third-party listings.</p>

            <h2>12. Dispute Resolution</h2>
            <p>Any disputes will be resolved through arbitration in accordance with the laws of India. You agree to waive any right to a trial by jury or to participate in a class action.</p>

            <h2>13. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be posted here with the updated date. Continued use of the platform after changes constitutes acceptance.</p>

            <h2>14. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India.</p>

            <h2>15. Contact Us</h2>
            <p>For questions or concerns regarding these Terms, please contact us at:
            <a href="mailto:amanmotwani28@gmail.com" className="ml-1">📧 amanmotwani28@gmail.com</a></p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
