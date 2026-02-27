import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { DashboardLayout } from './components/DashboardLayout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DashboardPage } from './pages/DashboardPage';
import { FindTeammatesPage } from './pages/FindTeammatesPage';
import { TeamBuilderPage } from './pages/TeamBuilderPage';
import { MicroCollaborationPage } from './pages/MicroCollaborationPage';
import { SkillInsightsPage } from './pages/SkillInsightsPage';
import { ProfilePage } from './pages/ProfilePage';
import { ResumeBuilderPage } from './pages/ResumeBuilderPage';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />

            {/* Protected Dashboard Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/find" element={<FindTeammatesPage />} />
              <Route path="/team-builder" element={<TeamBuilderPage />} />
              <Route path="/micro" element={<MicroCollaborationPage />} />
              <Route path="/insights" element={<SkillInsightsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/resume" element={<ResumeBuilderPage />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
