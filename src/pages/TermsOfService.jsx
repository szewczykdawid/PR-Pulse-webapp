import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="card">
            <h1 className="page-title">Terms of Service</h1>
            <p className="page-subtitle" style={{ marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose">

                <h3>1. Acceptance of Terms</h3>
                <p>
                    By installing, accessing, or using PR Pulse ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
                </p>

                <h3>2. Description of Service</h3>
                <p>PR Pulse is a Bitbucket application that provides:</p>
                <ul>
                    <li>Pull request analytics and statistics</li>
                    <li>Code review performance metrics</li>
                    <li>Team leaderboards and karma scoring</li>
                    <li>Historical trend analysis</li>
                </ul>
                <p>The App is provided as a Forge app on the Atlassian Marketplace.</p>

                <h3>3. Your Use of the Service</h3>

                <h4>Eligibility</h4>
                <p>You must:</p>
                <ul>
                    <li>Have a valid Bitbucket Cloud account</li>
                    <li>Have appropriate permissions to install apps in your workspace</li>
                    <li>Comply with all applicable laws and regulations</li>
                </ul>

                <h4>Acceptable Use</h4>
                <p>You agree to:</p>
                <ul>
                    <li>Use PR Pulse only for its intended purpose (code review analytics)</li>
                    <li>Not attempt to reverse engineer, decompile, or hack the App</li>
                    <li>Not use the App to violate any laws or third-party rights</li>
                    <li>Not interfere with or disrupt the App's functionality</li>
                    <li>Not use automated systems to access the App beyond normal usage</li>
                </ul>

                <h4>Prohibited Activities</h4>
                <p>You may NOT:</p>
                <ul>
                    <li>Share access credentials with unauthorized users</li>
                    <li>Use PR Pulse to collect data for competing services</li>
                    <li>Attempt to access data from workspaces you don't have permission for</li>
                    <li>Use the App to spam, harass, or harm others</li>
                    <li>Circumvent usage limits or access controls</li>
                </ul>

                <h3>4. Data and Privacy</h3>

                <h4>Data Collection</h4>
                <p>By using PR Pulse, you authorize us to:</p>
                <ul>
                    <li>Access pull request metadata from your Bitbucket workspace</li>
                    <li>Process user activity for leaderboards and trends</li>
                </ul>

                <h4>Your Data Rights</h4>
                <p>You retain all ownership rights to your data. We only process data to provide App functionality.</p>
                <p>See our <Link to="/privacy" className="btn-link" style={{ textDecoration: 'none' }}>Privacy Policy</Link> for detailed information about data handling.</p>

                <h4>Atlassian's Role</h4>
                <p>PR Pulse is built on Atlassian Forge.</p>

                <h4>Current Pricing</h4>
                <p>PR Pulse is currently offered free of charge during our MVP phase.</p>

                <h4>Future Pricing</h4>
                <p>We reserve the right to introduce paid plans in the future. If pricing changes:</p>
                <ul>
                    <li>You may uninstall the App before charges begin</li>
                </ul>

                <h4>Refunds</h4>
                <p>If we introduce paid plans, our refund policy will be clearly stated at the time of purchase.</p>

                <h4>Your License</h4>
                <p>We grant you a limited, non-exclusive, non-transferable license to use PR Pulse for your internal business purposes, subject to these Terms.</p>

                <h4>Feedback</h4>
                <p>If you provide feedback, suggestions, or ideas about PR Pulse, we may use them without compensation or attribution to you.</p>

                <h3>5. Disclaimer of Warranties</h3>
                <p><strong>PR PULSE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong></p>
                <p>We do not guarantee that the App will:</p>
                <ul>
                    <li>Be error-free or uninterrupted</li>
                    <li>Meet your specific requirements</li>
                    <li>Provide accurate or complete data</li>
                    <li>Be compatible with all systems or configurations</li>
                </ul>
                <p>You use PR Pulse at your own risk.</p>

                <h3>6. Term and Termination</h3>

                <h4>Term</h4>
                <p>These Terms remain in effect as long as you use PR Pulse.</p>

                <h4>Termination by You</h4>
                <p>You may stop using PR Pulse at any time by uninstalling the App from your Bitbucket workspace.</p>

                <h4>Termination by Us</h4>
                <p>We may suspend or terminate your access if:</p>
                <ul>
                    <li>You violate these Terms</li>
                    <li>You engage in fraudulent or illegal activity</li>
                    <li>We discontinue PR Pulse (with 30 days notice)</li>
                    <li>Required by law or Atlassian</li>
                </ul>

                <h3>7. Changes to Terms</h3>
                <p>We may modify these Terms at any time. Changes will be effective:</p>
                <ul>
                    <li>Immediately upon posting for minor updates</li>
                    <li>30 days after notice for material changes</li>
                </ul>
                <p>Continued use after changes constitutes acceptance of the new Terms.</p>

                <h3>8. Third-Party Services</h3>
                <p>PR Pulse integrates with:</p>
                <ul>
                    <li>Bitbucket (via Atlassian APIs)</li>
                    <li>Atlassian Forge platform</li>
                </ul>
                <p>Your use of these services is governed by their respective terms and policies.</p>

            </div>
        </div>
    );
};

export default TermsOfService;
