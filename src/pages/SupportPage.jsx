import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';

const SupportPage = () => {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

    const handleReset = () => {
        // Basic way to reset: reload page or we could try to implement a reset with the hook if needed.
        // However, the hook doesn't provide a reset function directly in the simple usage.
        // For now, reloading or just redirecting to home is common, but let's just reload the form state.
        window.location.reload();
    };

    if (state.succeeded) {
        return (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="text-center mb-12">
                    <h1 className="page-title">How can we help?</h1>
                </div>
                <div className="card">
                    <div className="success-message">
                        <div className="success-icon">
                            <CheckCircle />
                        </div>
                        <h3 className="page-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                        <p className="page-subtitle" style={{ marginBottom: '2rem' }}>Thanks for reaching out. We'll check your message and reply to your email address.</p>
                        <button
                            onClick={handleReset}
                            className="btn-link"
                        >
                            Send another message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-12">
                <h1 className="page-title">How can we help?</h1>
                <p className="page-subtitle">
                    Have questions about PR Pulse? Found a bug? Feature request?
                    <br />Drop us a message and we'll get back to you asap.
                </p>
            </div>

            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-col form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="form-col form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@company.com"
                                required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            required
                            defaultValue="" // Use defaultValue for uncontrolled component
                        >
                            <option value="" disabled>Select a topic</option>
                            <option value="support">Technical Support</option>
                            <option value="billing">Billing & Access</option>
                            <option value="feature">Feature Request</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Describe your issue or question..."
                            required
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn-primary"
                    >
                        {state.submitting ? (
                            'Sending...'
                        ) : (
                            <>
                                <Send size={20} /> Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SupportPage;
