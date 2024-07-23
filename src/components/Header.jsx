import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
    <h1>Taaj Logan</h1>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    </>
  );
}