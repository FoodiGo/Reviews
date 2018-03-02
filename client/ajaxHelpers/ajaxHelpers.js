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
      success: (data) => {
        callback(data);
      },
    });
  },

  put: (route, request) => {
    $.put({
      url: route,
      'content-type': 'application/json',
      data: JSON.stringify(request),
    });
  },
};

export default helpers;
