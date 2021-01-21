const secrets = {
  youtubeApiKey: 'AIzaSyDKPsICIwjRMt0EAd1qHGKFJofgsWcgaY4',
};

const getSecret = (key) => secrets[key];

export default getSecret;
