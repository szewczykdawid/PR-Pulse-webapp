import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="card">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-subtitle" style={{ marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose">
                <h3>1. Introduction</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h3>2. Data Collection</h3>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ul>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
                    <li>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</li>
                </ul>

                <h3>3. Use of Information</h3>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                </p>

                <h3>4. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at support@example.com.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
