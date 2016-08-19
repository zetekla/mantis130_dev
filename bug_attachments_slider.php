<?php // print_p($t_list_attachments);?>
<div ng-app="myCarouselApp" class="show-grid">
  <div ng-controller="CarouselCtrl" >
    <?php echo '<div class="hidden no-print" id="image_list">'. json_encode($t_list_attachments).'</div>';?>
    <div>
      <uib-carousel active="active" interval="myInterval" no-wrap="noWrapSlides" class="bg-danger">
        <uib-slide ng-repeat="slide in slides track by slide.id" index="slide.id" class="bg-warning">
          <img ng-src="{{slide.image}}" style="margin:auto;">
          <div class="carousel-caption">
            <h4 class="text-success">Slide {{slide.id}}</h4>
            <p class="text-info">{{slide.text}}</p>
          </div>
        </uib-slide>
      </uib-carousel>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button type="button" class="btn btn-info" ng-click="addSlide()">Add Slide</button>
        <button type="button" class="btn btn-info" ng-click="randomize()">Randomize slides</button>
        <div class="checkbox">
          <label>
            <input type="checkbox" ng-model="noWrapSlides">
            Disable Slide Looping
          </label>
        </div>
      </div>
      <div class="col-md-6">
        Interval, in milliseconds: <input type="number" class="form-control" ng-model="myInterval"> See bug_attachment_display.php for fullview, bug_attachments_slider.php for modification
      </div>
    </div>
  </div>
</div>

<script type="text/javascript" src="/development/mantisbt130/javascript/bug_view_attachments.js"></script>
 <?php // require_js( 'bug_view_attachments.js' );?>
