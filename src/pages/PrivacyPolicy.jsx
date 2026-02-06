import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="card">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-subtitle" style={{ marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose">
                <h3>1. Data Collection</h3>

                <h4>Data We Access from Bitbucket</h4>
                <p>PR Pulse accesses the following information from your Bitbucket workspace:</p>
                <ul>
                    <li><strong>Pull Request Data</strong>: PR titles, descriptions, authors, reviewers, approval status, comments, and timestamps</li>
                    <li><strong>User Information</strong>: Display names, email addresses, and avatar URLs of team members</li>
                    <li><strong>Repository Information</strong>: Repository names and metadata</li>
                    <li><strong>Activity Data</strong>: Review times, comment counts, and approval metrics</li>
                </ul>

                <h4>Data We Store</h4>
                <p>
                    We do NOT store any data. We don't use your data. We don't have access to your data. Everything is pulled and rendered in your browser and does not leave it.
                </p>

                <h3>2. How We Use Your Information</h3>
                <p>We use the collected information to:</p>
                <ul>
                    <li>Display pull request statistics and trends</li>
                    <li>Calculate reviewer karma and leaderboards</li>
                    <li>Generate insights about your team's code review process</li>
                </ul>

                <h3>3. Data Sharing</h3>
                <p><strong>We do NOT:</strong></p>
                <ul>
                    <li>Sell your data to third parties</li>
                    <li>Share your data with advertisers</li>
                    <li>Use your data for purposes outside of PR Pulse functionality</li>
                </ul>

                <h3>4. Third-Party Services</h3>
                <p>PR Pulse is built on the Atlassian Forge platform and uses:</p>
                <ul>
                    <li>Atlassian Forge infrastructure for hosting</li>
                    <li>Bitbucket API for accessing pull request data</li>
                </ul>

                <h3>5. Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. We will notify users of material changes by:</p>
                <ul>
                    <li>Updating the "Last Updated" date</li>
                    <li>Posting a notice in the app (for major changes)</li>
                </ul>
                <p>Continued use of PR Pulse after changes constitutes acceptance of the updated policy.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
