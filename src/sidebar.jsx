import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column bg-light border-end">
      {/* Sidebar Header */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h6 className="text-uppercase text-muted mb-0 small fw-bold">Workspaces</h6>
        <button className="btn btn-sm btn-outline-secondary">+</button>
      </div>

      {/* Workspace List */}
      <div className="flex-grow-1 overflow-auto p-2">
        <div className="workspace-item d-flex align-items-center gap-2 p-2 rounded mb-1 bg-primary text-white">
          <span className="sidebar-icon">💡</span>
          <span className="small">My Ideas</span>
        </div>
        <div className="workspace-item d-flex align-items-center gap-2 p-2 rounded mb-1 text-secondary">
          <span className="sidebar-icon">💼</span>
          <span className="small">Work Projects</span>
        </div>
        <div className="workspace-item d-flex align-items-center gap-2 p-2 rounded mb-1 text-secondary">
          <span className="sidebar-icon">🏠</span>
          <span className="small">Personal</span>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="border-top p-2">
        <div className="workspace-item d-flex align-items-center gap-2 p-2 rounded text-secondary">
          <span className="sidebar-icon">⚙️</span>
          <span className="small">Settings</span>
        </div>
      </div>
    </div>
  );
}