import React, { useState } from "react";
import { ProductDetail } from "../types/options";

const Options = () => {
  const [siteDetails, setSiteDetials] = useState<ProductDetail[]>([]);

  return (
    <div className="w-screen overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Site Name
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name Class
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name Tag
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name Tag
            </th>
            <th scope="col" className="px-6 py-3">
              Product Price Class
            </th>
            <th scope="col" className="px-6 py-3">
              Product Price Tag
            </th>
            <th scope="col" className="px-6 py-3">
              Product Color Class
            </th>
            <th scope="col" className="px-6 py-3">
              Product Color Tag
            </th>
            <th scope="col" className="px-6 py-3">
              Product Size Class
            </th>
            <th scope="col" className="px-6 py-3">
              Product Size Tag
            </th>
          </tr>
        </thead>
        <tbody>
          {siteDetails.map((x, i) => (
            <tr key={i} className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {x.siteName}
              </th>
              <td className="px-6 py-4">{x.productNameParentClass}</td>
              <td className="px-6 py-4">{x.productNameTag}</td>
              <td className="px-6 py-4">{x.producImageParentClass}</td>
              <td className="px-6 py-4">{x.productPriceParentClass}</td>
              <td className="px-6 py-4">{x.productPriceTag}</td>
              <td className="px-6 py-4">{x.colorParentClass}</td>
              <td className="px-6 py-4">{x.colorTag}</td>
              <td className="px-6 py-4">{x.sizeParentClass}</td>
              <td className="px-6 py-4">{x.sizeTag}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className="p-2">
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div>
            <label
              htmlFor="site_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Site Name
            </label>
            <input
              type="text"
              id="site_name"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_name_class"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Name Class
            </label>
            <input
              type="text"
              id="product_name_class"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_name_tag"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Name Tag
            </label>
            <input
              type="text"
              id="product_name_tag"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_price_class"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Price Class
            </label>
            <input
              type="tel"
              id="product_price_class"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_price_tag"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Price Tag
            </label>
            <input
              type="tel"
              id="product_price_tag"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_color_class"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Color class
            </label>
            <input
              type="tel"
              id="product_color_class"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_color_tag"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Color Tag
            </label>
            <input
              id="product_color_tag"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_size_class"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Size class
            </label>
            <input
              type="tel"
              id="product_size_class"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="product_size_tag"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Size Tag
            </label>
            <input
              id="product_size_tag"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Options;
