##########
How do I get set up?
##########

* **Summary of set up**

    1. Fork the repository to your personal account.
    2. Clone the fork to your local machine.

    NOTE: To pull the latest code, execute "git pull upstream"

    4. Enter `sudo yarn` in the root of the repository.

* **Configuration**

    Webpack configuration for **dev** and **prod** mode has already been done.

* **Starting up the dev server**

    Enter `sudo yarn start` in the root of the repository.

* **Starting up the Production server**

    Enter `sudo yarn build` in the root of the repository.
    Enter `sudo yarn add forever -g` in the root of the repository.
    Enter `sudo forever start server.js` in the root of the repository.