import { LocationProvider, ErrorBoundary, Router } from 'preact-iso';
import Footer from './components/Footer';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <div className="flex flex-col h-screen">
            <LocationProvider>
                <ErrorBoundary>
                    <Router>
                        <Home path="/" />
                        <NotFound default />
                    </Router>
                    <Footer />
                </ErrorBoundary>
            </LocationProvider>
        </div>
    );
}
