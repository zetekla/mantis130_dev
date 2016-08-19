<?php
    header('Content-Type: text/javascript; charset=UTF-8');
    function get_all_images_from_a_directory($folder='test_images/', $type='{*.jpg, *.JPG, *.JPEG, *.png, *.PNG}'){
        $images = [];
        $all_images = glob($folder.$type, GLOB_BRACE);
        $count = count($all_images);
        for ($i = 0; $i < $count; $i++) {
            $images[$i] = new stdClass();
            $images[$i]->src = $all_images[$i];
            $images[$i]->name = substr($all_images[$i],strlen($folder),strpos($all_images[$i], '.')-strlen($folder));
            $images[$i]->modified = date('YmdHis', filemtime($all_images[$i])).$i;
        }
        return $images;
    }
    $t_images = get_all_images_from_a_directory();
    /*echo '<pre>';
        print_r($images);
        // alternatively; no header!!
        <script type="text/javascript">
            var ar = <?php echo json_encode($t_images) ?>;
        </script>
    echo '</pre>';*/
    echo "var images_str = '". json_encode($t_images). "';\n";
?>