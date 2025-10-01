import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Shield, Zap, TrendingUp, Clock, LogOut } from 'lucide-react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import '../styles/landing.css';
import DarkModeToggle from './DarkModeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function LandingPage({ user, setUser }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showDialog, setShowDialog] = useState(false);

  const handleSignInClick = () => navigate('/login');
  const handleSignUpClick = () => navigate('/signup');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowDialog(false);
    toast.success(t('toast.logout_success'));
    navigate('/');
  };

  const handleGetStartedClick = () => {
    if (user) navigate('/dashboard');
    else navigate('/login');
  };

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div data-aos="fade-up" className="landing-header-content">
          <div className="landing-logo">
            <FileText className="landing-logo-icon" />
            <Link to="/" className="landing-logo-text">{t('app.title')}</Link>
          </div>
          <div className="landing-header-buttons">
            <div className="language-switcher-wrapper"><LanguageSwitcher /></div>
            {user ? (
              <>
                <button className="landing-signin-button" onClick={() => navigate('/dashboard')}>
                  {t('nav.return_to_dashboard')}
                </button>
                <button className="landing-contact-button" onClick={() => navigate('/contact')}>
                  {t('nav.contact')}
                </button>
                <div className="dashboard-profile">
                  <button onClick={() => setShowDialog(true)} className="btn-logout">
                    <LogOut size={16} /> {t('auth.logout')}
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="landing-signin-button" onClick={handleSignInClick}>{t('auth.login')}</button>
                <button className="landing-contact-button" onClick={() => navigate('/contact')}>{t('nav.contact')}</button>
                <button className="landing-signup-button" onClick={handleSignUpClick}>{t('auth.signup')}</button>
              </>
            )}
            <DarkModeToggle />
          </div>
        </div>
      </header>

      {/* Logout Overlay */}
      {showDialog && (
        <div className="overlay-popup" role="dialog" aria-modal="true">
          <div className="overlay-card">
            <div className="overlay-header">
              <LogOut size={18} className="overlay-icon" />
              <div className="overlay-title">{t('auth.logout')}</div>
            </div>
            <div className="overlay-body">
              <div className="overlay-text">
                Are you sure you want to log out?
                <div className="overlay-subtext">You'll need to sign in again to continue.</div>
              </div>
              <div className="overlay-actions">
                <button className="btn-confirm" onClick={handleLogout}>
                  {t('common.yes')}, {t('auth.logout')}
                </button>
                <button className="btn-cancel" onClick={() => setShowDialog(false)}>{t('common.cancel')}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="landing-hero-section">
        <div className="landing-hero-content">
          <h1 data-aos="fade-up" className="landing-hero-title">
            {t('homepage.hero_title')}
            <span className="landing-hero-subtitle">{t('app.subtitle')}</span>
          </h1>
          <p data-aos="fade-up" className="landing-hero-description">{t('homepage.hero_subtitle')}</p>
          <div className="landing-hero-button-container">
            <button data-aos="fade-up" className="landing-primary-button" onClick={handleGetStartedClick}>
              {user ? t('nav.return_to_dashboard') : t('homepage.get_started')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features-section">
        <div data-aos="fade-up" aos-duration="740" className="landing-section-header">
          <h2 className="landing-section-title" data-aos="fade-up">Why Choose Health Report Analyzer?</h2>
          <p data-aos="fade-up" aos-duration="740" className="landing-section-description">
            Transform complex medical data into clear, actionable insights with our cutting-edge platform
          </p>
        </div>

        <div data-aos="fade-up" aos-duration="740" className="landing-section-header">
          <h2 className="landing-section-title">{t('homepage.features_title')}</h2>
          <p data-aos="fade-up" aos-duration="740" className="landing-section-description">
            {t('homepage.platform_desc')}
          </p>
        </div>

        <div className="landing-features-grid">
          {/* Feature 1 */}
          <div data-aos="fade-up" aos-duration="740" className="landing-feature-card">
            <div className="landing-feature-header">
              <div className="landing-feature-icon landing-zap"><Zap className="landing-icon landing-zap" /></div>
              <h3 data-aos="fade-up" className="landing-feature-title">{t('homepage.feature_1_title')}</h3>
            </div>
            <p data-aos="fade-up" aos-duration="740" className="landing-feature-description">{t('homepage.feature_1_desc')}</p>
          </div>

          {/* Feature 2 */}
          <div data-aos="fade-up" aos-duration="740" className="landing-feature-card">
            <div className="landing-feature-header">
              <div className="landing-feature-icon landing-shield"><Shield className="landing-icon landing-shield" /></div>
              <h3 data-aos="fade-up" className="landing-feature-title">{t('homepage.feature_2_title')}</h3>
            </div>
            <p data-aos="fade-up" aos-duration="740" className="landing-feature-description">{t('homepage.feature_2_desc')}</p>
          </div>

          {/* Feature 3 */}
          <div data-aos="fade-up" aos-duration="740" className="landing-feature-card">
            <div className="landing-feature-header">
              <div className="landing-feature-icon landing-trending-up"><TrendingUp className="landing-icon landing-trending-up" /></div>
              <h3 data-aos="fade-up" className="landing-feature-title">{t('homepage.trend_tracking')}</h3>
            </div>
            <p data-aos="fade-up" aos-duration="740" className="landing-feature-description">{t('homepage.trend_tracking_desc')}</p>
          </div>

          {/* Feature 4 */}
          <div data-aos="fade-up" aos-duration="740" className="landing-feature-card">
            <div className="landing-feature-header">
              <div className="landing-feature-icon landing-file-text"><FileText className="landing-icon landing-file-text" /></div>
              <h3 data-aos="fade-up" className="landing-feature-title">{t('homepage.feature_3_title')}</h3>
            </div>
            <p data-aos="fade-up" aos-duration="740" className="landing-feature-description">{t('homepage.feature_3_desc')}</p>
          </div>

          {/* Feature 5 */}
          <div data-aos="fade-up" aos-duration="740" className="landing-feature-card">
            <div className="landing-feature-header">
              <div className="landing-feature-icon landing-clock"><Clock className="landing-icon landing-clock" /></div>
              <h3 data-aos="fade-up" className="landing-feature-title">{t('homepage.available_247')}</h3>
            </div>
            <p data-aos="fade-up" aos-duration="740" className="landing-feature-description">{t('homepage.available_247_desc')}</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="landing-how-it-works-section">
        <div className="landing-section-header">
          <h2 data-aos="fade-up" className="landing-section-title">{t('homepage.how_it_works')}</h2>
          <p data-aos="fade-up" aos-duration="740" className="landing-section-description">{t('homepage.how_it_works_desc')}</p>
        </div>

        <div data-aos="fade-up" aos-duration="740" className="landing-steps-grid">
          {[1, 2, 3].map(i => (
            <div key={i} className="landing-step">
              <div className="landing-step-number">
                <span className="landing-step-number-text">{i}</span>
              </div>
              <h3 data-aos="fade-up" className="landing-step-title">{t(`homepage.step_${i}_title`)}</h3>
              <p data-aos="fade-up" data-aos-duration="740" className="landing-step-description">
                {t(`homepage.step_${i}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta-section">
        <div className="landing-cta-card">
          <h2 data-aos="fade-up" data-aos-duration="740" className="landing-cta-title">{t('homepage.cta_title')}</h2>
          <p data-aos="fade-up" data-aos-duration="740" className="landing-cta-description">{t('homepage.cta_desc')}</p>
          <div data-aos="fade-up" data-aos-duration="740" className="landing-cta-button-container">
            <button className="landing-primary-button" onClick={handleGetStartedClick}>
              {user ? t('homepage.continue_dashboard') : t('homepage.start_free')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
