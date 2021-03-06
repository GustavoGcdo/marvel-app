This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Marvel app
Project consuming marvel api for searching characters and comics.

See project live on: [marvel-app](https://marvel-app-rho.vercel.app/) 
  
### Instructions
1. Install dependencies  with **`yarn install or npm install`**
2. Create .env file in project root.
3. Add variables:
	-  REACT_APP_BASE_URL (https://gateway.marvel.com/v1/public)
	-  REACT_APP_TS (timestamp)
	-  REACT_APP_API_KEY (your public api key)
	-  REACT_APP_HASH (required hash for api)

	 For more info, see:  [official documentation](https://developer.marvel.com/documentation/authorization)
4. Run project with **`yarn start`**
5. To deploy project run **`yarn build`**


### Screenshots

![home page](./screenshots/home.png)

![character info](./screenshots/character-info.png)

![mobile home page](./screenshots/mobile-home.png)

![mobile character info](./screenshots/mobile-character-info.png)