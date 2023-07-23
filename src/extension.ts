import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('open-in-github-button2.openProject', () => {
    vscode.window.showInformationMessage('open project');
  });

  context.subscriptions.push(disposable);
}

function openProject() {
  vscode.extensions.getExtension('xiayaoliu.open-in-github-button2')?.packageJSON;
}

export function deactivate() {}
