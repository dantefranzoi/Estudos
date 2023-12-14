## Dicas de Comandos Git!

O Git é uma ferramenta poderosa para controle de versão distribuído. Aqui estão alguns comandos essenciais para aprimorar sua experiência:

01. git init (Inicia um novo repositório Git em um diretório existente)

02. git add nome-do-arquivo (Adiciona o arquivo específico na área de preparação)

03. git add . (Adiciona todos os arquivos modificados na área de preparação)

04. git commit -m "mensagem" (Registra as alterações no repositório como um novo commit, incluindo uma mensagem. Esta deve ser curta, significativa e explicar o propósito das alterações realizadas no commit.)

05. git branch -M main (Renomeia a branch padrão do Git)

06. git push -u origin main (Comita os arquivos que estão no repositório local, para o repositório remoto)

07. git clone URL_do_repositório (Cria uma cópia local de um repositório Git existente)

08. git status (Exibe o status atual das modificações no seu repositório)

09. git log (Lista o histórico de commits no repositório)

10. git reset nome-do-arquivo (Remove o arquivo especificado da área de preparação)

11. git branch (Lista todas as branches locais)

12. git branch nome-da-branch (Cria uma nova branch com o nome especificado)

13. git checkout nome-da-branch (Muda para a branch especificada)

14. git pull (Atualiza o repositório local com as mudanças do repositório remoto)

15. git pull original nome-da-branch (Puxa as modificações realizadas em uma branch específica do repositório remoto)

16. git push (Envia as modificações da branch atual para o repositório remoto)

17. git push origin nome-da-branch (Envia as modificações da branch local com o nome especificado para a branch correspondente no repositório remoto)

18. git fetch (Busca todas as branches do repositório remoto que ainda não foram baixadas para o repositório local. Isso não mescla automaticamente as mudanças com sua branch local)

19. git merge (Combina alterações de diferentes branches)

**observação**: você não precisa utilizar sempre "origin" como remote. Por padrão, "origin" é a url utilizada para clonar o repositório.

Se você clonou com ssh://, então dá pra utilizar "push origin branch" pra fazer um push, pois o remote "origin", neste caso, já está em uma url em ssh.

Caso contrário, se tiver clonado no protocolo https://, é preciso criar um remote novo apontando pra url no protocolo ssh://. Nesse caso, utiliza-se

```
git remote add nome ssh://git@github.com/user/repo
```
onde nome é qualquer nome que você quiser.

Feito isso, para dar um push, utiliza-se

```
git push nome branch