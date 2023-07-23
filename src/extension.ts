import * as vscode from 'vscode';
import * as fs from 'node:fs';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'open-in-github-button2.openProject',
    openProject
  );

  let statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);

  statusBar.command = 'open-in-github-button2.openProject';
  statusBar.tooltip = 'Open in Github';
  statusBar.text = '$(github-inverted)';
  statusBar.show();

  context.subscriptions.push(disposable);
}

function openProject() {
  const workspace = `${vscode.workspace.rootPath}/package.json`;
  const packageBuffer = fs.readFileSync(workspace);

  if (packageBuffer) {
    const packageJSON = JSON.parse(packageBuffer.toString());

    const url = packageJSON?.repository?.url.replace('git+', '');
    if (url) {
      // vscode.window.showInformationMessage(`open project: ${url}`);
      vscode.env.openExternal(url);
      return;
    }
  }
  vscode.window.showInformationMessage(`repository.url is not found in package.json`);
}

export function deactivate() {}
