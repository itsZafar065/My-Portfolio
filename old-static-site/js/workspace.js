/* Workspace Switcher Logic */

document.addEventListener('DOMContentLoaded', () => {
  // Tab Switching
  const tabs = document.querySelectorAll('.workspace-tab');
  const panes = document.querySelectorAll('.workspace-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // Update active tab class
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      panes.forEach(pane => {
        if (pane.id === `${target}-pane`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // ==========================================
  // Figma Workspace Simulation
  // ==========================================
  const figmaLayers = document.querySelectorAll('.figma-layer-item');
  const figmaCard = document.getElementById('figma-preview-card');
  const figmaImg = document.querySelector('.figma-card-image');
  const inspectW = document.getElementById('inspect-width');
  const inspectH = document.getElementById('inspect-height');
  const inspectRadius = document.getElementById('inspect-radius');
  const inspectFill = document.getElementById('inspect-fill');

  figmaLayers.forEach(layer => {
    layer.addEventListener('click', () => {
      figmaLayers.forEach(l => l.classList.remove('active'));
      layer.classList.add('active');

      const element = layer.getAttribute('data-element');

      // Change design specs in inspect panel dynamically
      if (element === 'card-container') {
        inspectW.innerText = '320px';
        inspectH.innerText = '320px';
        inspectRadius = '16px';
        inspectFill.innerText = 'rgba(255, 255, 255, 0.05)';
        
        // Update visual
        figmaCard.style.transform = 'scale(1.05) rotate(0deg)';
        figmaCard.style.border = '2px solid #0c8de4';
        figmaImg.style.border = 'none';
      } else if (element === 'card-image') {
        inspectW.innerText = '288px';
        inspectH.innerText = '160px';
        inspectRadius = '8px';
        inspectFill.innerText = 'linear-gradient(135deg, #ff007f, #7f00ff)';
        
        // Update visual
        figmaCard.style.transform = 'scale(1)';
        figmaCard.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        figmaImg.style.border = '2px solid #0c8de4';
      } else if (element === 'badge-pill') {
        inspectW.innerText = '82px';
        inspectH.innerText = '22px';
        inspectRadius = '4px';
        inspectFill.innerText = 'rgba(255, 255, 255, 0.1)';
        
        figmaCard.style.transform = 'scale(1)';
        figmaCard.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        figmaImg.style.border = 'none';
      }
    });
  });

  // ==========================================
  // VS Code Workspace Simulation
  // ==========================================
  const vscodeTabs = document.querySelectorAll('.vscode-file-tab');
  const codeContent = document.getElementById('vscode-code');
  const runBtn = document.querySelector('.vscode-run-btn');
  const terminal = document.querySelector('.vscode-terminal');

  const fileContents = {
    'server.js': `const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

<span class="syntax-comment">// MERN Backend Database API Setup</span>
app.use(cors());
app.use(express.json());

const projectSchema = new mongoose.Schema({
  title: String,
  type: String,
  tech: [String]
});

const Project = mongoose.model('Project', projectSchema);

app.get('/api/projects', async (req, res) => {
  const list = await Project.find();
  res.json({ success: true, count: list.length, data: list });
});`,
    
    'App.jsx': `import React, { useState, useEffect } from 'react';
import axios from 'axios';

<span class="syntax-comment">// React UI Render Component</span>
export default function App() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    &lt;div className="portfolio-grid"&gt;
      {projects.map(p => (
        &lt;ProjectCard key={p._id} title={p.title} /&gt;
      ))}
    &lt;/div&gt;
  );
}`
  };

  vscodeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      vscodeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const file = tab.getAttribute('data-file');
      codeContent.innerHTML = fileContents[file];

      // Update lines count
      const lines = fileContents[file].split('\n').length;
      const lineNumbers = document.querySelector('.vscode-line-numbers');
      lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      terminal.innerHTML = '<span style="color: #6a9955;">// Initializing local Express server...</span><br>';
      runBtn.disabled = true;
      runBtn.style.opacity = '0.6';

      let steps = [
        { text: 'npm run dev', delay: 400 },
        { text: '<span style="color: #569cd6;">[nodemon] 3.0.1 - starting `node server.js`</span>', delay: 800 },
        { text: '<span style="color: #4fc1ff;">[Mongoose] Connecting to MongoDB Cluster Atlas...</span>', delay: 1300 },
        { text: '<span style="color: #2ea44f;">[Mongoose] MongoDB Connection Secured successfully.</span>', delay: 1800 },
        { text: '<span style="color: #dcdcaa;">[Server] Express active & running on PORT: 5000</span>', delay: 2200 },
        { text: '<span style="color: #ce9178;">[API] GET /api/projects - 200 OK (28ms)</span>', delay: 2700 },
        { text: '<span style="color: #fff;">{ success: true, total: 3, payload: ["MERN Social App", "WordPress Portal", "Figma Kit"] }</span>', delay: 3200 }
      ];

      steps.forEach(step => {
        setTimeout(() => {
          terminal.innerHTML += `${step.text}<br>`;
          terminal.scrollTop = terminal.scrollHeight;
          
          if (step === steps[steps.length - 1]) {
            runBtn.disabled = false;
            runBtn.style.opacity = '1';
          }
        }, step.delay);
      });
    });
  }

  // ==========================================
  // WordPress Customizer Simulation
  // ==========================================
  const wpColorSelect = document.getElementById('wp-color-select');
  const wpLayoutSelect = document.getElementById('wp-layout-select');
  const wpTitleInput = document.getElementById('wp-title-input');
  
  const mockHeader = document.getElementById('mock-site-header');
  const mockHero = document.getElementById('mock-site-hero');
  const mockTitleEl = document.getElementById('mock-site-title');
  const mockLogoEl = document.getElementById('mock-site-logo');

  if (wpColorSelect) {
    wpColorSelect.addEventListener('change', () => {
      const color = wpColorSelect.value;
      if (color === 'indigo') {
        mockHeader.style.background = '#312e81';
        mockLogoEl.style.color = '#c7d2fe';
      } else if (color === 'teal') {
        mockHeader.style.background = '#083344';
        mockLogoEl.style.color = '#67e8f9';
      } else if (color === 'pink') {
        mockHeader.style.background = '#500724';
        mockLogoEl.style.color = '#fbcfe8';
      } else if (color === 'emerald') {
        mockHeader.style.background = '#022c22';
        mockLogoEl.style.color = '#a7f3d0';
      }
    });
  }

  if (wpLayoutSelect) {
    wpLayoutSelect.addEventListener('change', () => {
      const layout = wpLayoutSelect.value;
      if (layout === 'minimal') {
        mockHero.style.textAlign = 'center';
        mockHero.style.padding = '3rem 1.5rem';
      } else if (layout === 'boxed') {
        mockHero.style.textAlign = 'left';
        mockHero.style.padding = '3rem 3rem';
      } else if (layout === 'wide') {
        mockHero.style.textAlign = 'right';
        mockHero.style.padding = '4rem 1.5rem';
      }
    });
  }

  if (wpTitleInput) {
    wpTitleInput.addEventListener('input', () => {
      mockTitleEl.innerText = wpTitleInput.value || 'Zafar Portfolio';
    });
  }
});
