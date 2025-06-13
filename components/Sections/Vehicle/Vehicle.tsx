import { getVehicle } from '@/server/vehicle/getVehicle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCart from '../AddToCart'

const Vehicle = async ({slug}: {slug: string}) => {
    const ev = await getVehicle({slug})
    const imgPath = process.env.NEXT_PUBLIC_STORAGE_URL

    return (
        <>
        <section className="ed-product__details section-gap">
            <div className="container ed-container">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6 col-12">
                        {/* TADA Details Image   */}
                        <div className="ed-shop-thumb">
                            <Image 
                                src={`${imgPath}/${ev.photo}`} 
                                alt={ev.name}
                                width={1366}
                                height={768}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        {/* TADA Details Content  */}
                        <div className="product__details-inner">
                            <div className="ed-product-short">
                                <h3>{ev.name}</h3>
                                <div className="ed-properties">
                                    {ev.vehicleProperties && ev.vehicleProperties.slice(0, 6).map((property: any) => (
                                        <span className="property-item" key={property.id}>
                                            <i className={property.label.icon}></i>
                                            <span className="property-pack">
                                                <small className="property-label">{property.label.name}</small>
                                                <small>{property.value}</small>
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <AddToCart ev={ev} />
                        </div>
                    </div>
                </div>

                <div className="ed-product__details-tab">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs mt-5 ed-product-tab-list" id="productTabs" role="tablist">
                                <li className="nav-item">
                                    <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" role="tab">
                                        Description
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content mt-4" id="productTabsContent">
                                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                    <div className="ed-product-tab-inside">
                                        <div className="ed-product-tab-inside__content tada-content" dangerouslySetInnerHTML={{ __html: ev.description }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-8">
                        {ev.vehiclePhotos && ev.vehiclePhotos?.map((photo: any) => (
                            <div className="col-lg-6 col-xl-6 col-md-6 col-12" key={photo.id}>
                                <div className="ed-course__card wow fadeInUp">
                                    <Link href="#" className="ed-course__img">
                                        <Image 
                                            src={`${imgPath}/${photo.filename}`} 
                                            alt={photo.caption}
                                            width={1366}
                                            height={768}
                                        />
                                    </Link>

                                    <a href="#" className="ed-course__tag">{photo.caption}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="ed-category section-gap pt-0">
            <div className="container ed-container">
                <div className="row">
                    <div className="col-12">
                        <div className="ed-section-head d-flex-between">
                            <div className="ed-section-head__info">
                                <span className="ed-section-head__sm-title">Performance</span>
                                <h3 className="ed-section-head__title m-0 ed-split-text left">
                                    Features / Specification
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="ed-category__wrapper">
                            {Array.isArray(ev.vehicleProperties) && ev.vehicleProperties.length > 0 ? (
                                ev.vehicleProperties?.map((property: any, index: number) => (
                                <Link key={property.id} href="#" className="ed-category__card wow fadeInUp">
                                    <div className="ed-category__icon bg-1 icon-lg">
                                    <i className={property.label?.icon}></i>
                                    </div>
                                    <div className="ed-category__info">
                                    <h4>{property.label?.name}</h4>
                                    <p>{property.value}</p>
                                    </div>
                                </Link>
                                ))
                            ) : (
                                <p>No property available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Vehicle