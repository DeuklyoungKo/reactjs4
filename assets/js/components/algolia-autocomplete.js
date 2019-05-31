import $ from 'jquery';
import 'autocomplete.js/dist/autocomplete.jquery';
import '../../css/algolia-autocomplete.scss';


// $(document).ready(function() {
export default function($elements, dataKey, displayKey){

    // $('.js-user-autocomplete').each(function() {
    $elements.each(function() {

        var autocompleteUrl = $(this).data('autocomplete-url');

        $(this).autocomplete({hint: false}, [
            {
                source: function(query, cb) {
                    $.ajax({
                        url: autocompleteUrl+'?query='+query
                    }).then(function(data) {

                        console.log(data);

                        if (dataKey) {
                            data = data[dataKey];
                        }
                        console.log(data);
                        cb(data);
                    });
                },
                // displayKey: 'email',
                displayKey: displayKey,
                debounce: 500 // only request every 1/2 second
            }
        ])
    });
};
