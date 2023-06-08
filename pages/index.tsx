// pages/index.tsx

import React from 'react';
import Header from '../components/Header';

function HomePage() {
  const title = '这是页面的标题';
  const menuItems = ['菜单项1', '菜单项2', '菜单项3'];

  return (
    <div>
      <Header title={title} menuItems={menuItems} />
      <main>
        <h2>这是页面的主要内容</h2>
        <p>这里是页面的详细内容。</p>
      </main>
      <footer>
        <p>这是页面的页脚。</p>
      </footer>
    </div>
  );
}

export default HomePage;
