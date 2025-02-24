Feature('login');

Scenario('deve logar com sucesso',  ({ I }) => {
    I.fillField('#inputEmail', 'qa@dotgroup.com');
    I.fillField('#inputSenha', 'qa@123');

    I.tap('Entrar');
    I.see('Você está logado com sucesso.', '#txtLogado');
});
