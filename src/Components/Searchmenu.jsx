import React from "react";

function SearchMenu() {
    return (


        <header class="py-3 mb-4 border-bottom">
            <div class="container d-flex flex-wrap justify-content-center">
                <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">

                    <span class="fs-4">Dogs For Sale</span>
                </a>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                </form>
            </div>
        </header>


    )
}

export default SearchMenu;