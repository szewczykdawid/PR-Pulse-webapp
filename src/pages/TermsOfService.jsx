import React from 'react';

const TermsOfService = () => {
    return (
        <div className="card">
            <h1 className="page-title">Terms of Service</h1>
            <p className="page-subtitle" style={{ marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose">
                <h3>1. Acceptance of Terms</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h3>2. Use License</h3>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on PR Pulse's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>

                <h3>3. Disclaimer</h3>
                <p>
                    The materials on PR Pulse's website are provided on an 'as is' basis. PR Pulse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h3>4. Limitations</h3>
                <p>
                    In no event shall PR Pulse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PR Pulse's website.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
