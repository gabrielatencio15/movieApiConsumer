<link href="../../assets/css/homeLoggedUser.css" type="text/css" rel="stylesheet">

<div class="container">
    <div class="py-5">
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-primary btn-lg btn-block btn-update-movie float-right" onclick="getApiData()">Update Movie List</button>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-md-4">
                <label class="input-form-label" for="search_by">Search by title</label>
                <input type="text" id="search_by" placeholder="Search" disabled>
            </div>
            <div class="col-md-4">
            <label class="input-form-label" for="year_inputs">Date range</label>
                <div class="row" id="year_inputs">
                    <div class="col-md-6">
                        <input type="number" min="1950" max="2022" class="center-inputs" placeholder="yyyy" disabled>
                    </div>
                    <div class="col-md-6">
                        <input type="number" min="1950" max="2022" class="center-inputs" placeholder="yyyy" disabled>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
            <label class="input-form-label" for="sort_by">Sort by</label>
                <select class="center-inputs" id="sort_by">
                    <option value="Title" selected>title</option>
                    <option value="Year">date</option>
                    <option value="Type">type</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-primary btn-lg btn-block btn-update-movie" onclick="retrieveMoviesData()">Submit</button>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="col-md-12"  style="border: 1px solid;">
        <table class="table table-striped table-responsive" id="movies_list" style="width: 50%;margin: auto;">
            <thead>
                <th>Title</th>
                <th>Year</th>
                <th>Type</th>
                <th>Poster</th>
            </thead>
        </table>

    </div>
    
</div>

<?php

session_start();

if(!isset($_SESSION["username"]))
{
    session_destroy();
    session_unset();
    header('Location: /talentTest');
    exit;
}

?>
