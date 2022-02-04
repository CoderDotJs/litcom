import React from 'react';
import './AllCategoryList.css';

const AllCategoryList = ({categories}) => {
    console.log(categories);
    return (
        <div className="categories bg-white">
            {
                categories.map((category, index) => {
                    return (
                        <div key={index} className="border-top">
                            <li className="p-2">{category.cate_name} {'>'}</li>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllCategoryList;