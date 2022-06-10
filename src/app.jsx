import { useState } from 'preact/hooks';

export function App() {

  const [joke, setJoke] = useState("");

  async function getJoke() {
    const res = await fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    const data = await res.json();
    setJoke(data.joke)
  }

  return (
    <>
      <header className="column is-four-fifths is-offset-1">
        <nav className="navbar">
          <div className="navbar-brand navbar-start">
            <a href="https://github.com/PhantomF11" className="navbar-item text-logo">Phantom<span className="text-logo-accent">Frost</span></a>
          </div>

          <hr className="navbar-divider"/>

          <div className="navbar-end navbar-item buttons">
            <a href='https://github.com/PhantomF11/preact-joke' className="button is-dark">Code</a>
          </div>
        </nav>
      </header>

      <main className="hero is-primary is-fullheight">
        
        <section className="hero-body flex">            
          <div className="container has-text-centered">
            <div className="section is-medium">
              <p className='title'>{joke === "" ? "Click on 'Get New Joke'" : joke}</p>
              <button className='button is-info' onClick={getJoke}>Get New Joke</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        
        <section className="container has-text-centered">
          <p>Copyright 2022 Phantom Frost</p>
          <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Licensed Under CC-0</a>
        </section>

      </footer>

    </>
  )
}
