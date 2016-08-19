Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

angular.module('myCarouselApp', ['ngAnimate', 'ui.bootstrap']);
angular.module('myCarouselApp').controller('CarouselCtrl', function ($scope, $window) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  // given an array of attachment images, slider can be made using the following
  var bug_view_images = angular.element(image_list).text();
  bug_view_images = JSON.parse(bug_view_images);
  var list_of_php_bug_view_images = [];
  for (var i of bug_view_images){
    list_of_php_bug_view_images.push(i.image_url);
  }

  var img_array = [
    'images/test_images/image002.jpg',
    'images/test_images/image005.jpg'];
  list_of_php_bug_view_images = list_of_php_bug_view_images.concat(img_array);
  img_array = list_of_php_bug_view_images;

  for (var i of img_array) {
    slides.push({
      image: i,
      text: ['random_text01', 'random_text02', 'random_text03', 'random_text04', 'random_text05'][slides.length%5],
      id: currIndex++
    });
  }

  $scope.addSlide = function() {
    // var newWidth = 600 + slides.length + 1;
    var i = Math.floor(Math.random()*73);
    var suffix = i.pad(3);
    slides.push({
      // image: 'images/test_images' + newWidth + '/300',
      image: 'images/test_images/image'+ suffix +'.jpg',
      text: ['Nice image','Awesome photograph','That is a sample picture','testing photo'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  // adding some random 4 slides
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});