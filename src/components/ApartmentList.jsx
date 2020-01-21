import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class ApartmentList extends Component {
    render() {
        return (
            <section>
                <div class="container">

                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div className="sec-heading center">
                                <h2>New &amp; featured Property</h2>
                                <p>Find new &amp; featured property for you.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row pt-5">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="text-center mt-4">
                                <a href="#c" class="btn btn-theme-2">Browse More Property</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
