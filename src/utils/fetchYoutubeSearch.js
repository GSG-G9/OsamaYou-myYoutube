import axios from 'axios';
import getSecret from '../secrets';

const getQueryString = (options) => {
  let queryString = '?';
  Object.keys(options).forEach((key) => {
    queryString += `${key}=${options[key]}&`;
  });
  return queryString.substr(0, queryString.length - 1);
};

const createYoutubeUrl = (ResourceTypes, options) => {
  return `https://www.googleapis.com/youtube/v3/${ResourceTypes}${getQueryString(
    options
  )}`;
};

const fetchYoutubeSearch = async (ResourceTypes, options) => {
  const copyOptions = { ...options };

  copyOptions.part = 'snippet';
  copyOptions.key = getSecret('youtubeApiKey');

  const url = createYoutubeUrl(ResourceTypes, copyOptions);
  const data = await axios.get(url);

  return data.data.items.map((item) => ({
    videoId: ResourceTypes === 'search' ? item.id.videoId : item.id,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    channelTitle: item.snippet.channelTitle,
    publishTime: item.snippet.publishTime,
  }));
};

export default fetchYoutubeSearch;
