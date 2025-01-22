import React from 'react'
    import './App.css'

    const App = () => {
      return (
        <div className="container">
          <header className="hero">
            <div className="hero-content">
              <h1>新しい時代のデザイン</h1>
              <p>シンプルで洗練されたデザインで、あなたのビジネスを次のレベルへ</p>
              <a href="#features" className="cta-button">詳細を見る</a>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern Office Design"
              />
            </div>
          </header>

          <section id="features" className="features">
            <h2>私たちの特徴</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>モダンなデザイン</h3>
                <p>最新のデザイントレンドを取り入れた洗練されたUI</p>
              </div>
              <div className="feature-card">
                <h3>高速パフォーマンス</h3>
                <p>最適化されたコードで高速なページ表示</p>
              </div>
              <div className="feature-card">
                <h3>レスポンシブ対応</h3>
                <p>全てのデバイスで美しく表示</p>
              </div>
            </div>
          </section>

          <footer>
            <p>&copy; 2023 おしゃれなLP. All rights reserved.</p>
          </footer>
        </div>
      )
    }

    export default App
