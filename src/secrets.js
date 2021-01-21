const secrets = {
  youtubeApiKey: 'AIzaSyDKPsICIwjRMt0EAd1qHGKFJofgsWcgaY4', //I will disable it later
};

const getSecret = (key) => secrets[key];

export default getSecret;
