import $ from 'jquery';

const helpers = {
  get: (route, callback) => {
    $.get({
      url: route,
      success: (data) => {
        callback(data);
      },
    });
  },

  post: (route, request, callback) => {
    $.post({
      url: route,
      'content-type': 'application/json',
      data: JSON.stringify(request),
      success: () => {
        callback();
      },
    });
  },

  put: (route, request, callback, restaurantId) => {
    $.put({
      url: route,
      'content-type': 'application/json',
      data: JSON.stringify(request),
      success: () => {
        callback(restaurantId);
      },
    });
  },
};

export default helpers;
