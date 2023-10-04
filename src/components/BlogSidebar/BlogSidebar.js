import React, { useState } from 'react';
import './BlogSidebar.css';
 
import { SidebarHeading } from '../../components';
import { blogContent } from '../../constants';
import { latestItems } from '../../utils';
 
import { FaAngleRight, FaCalendarAlt } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

import { Link } from 'react-router-dom';  

 
 
const BlogSidebar = ({
    selectedCategory, 
    selectedTag, 
    handleSubmit}) => { 

    const [searchValue, setSearchValue] = useState('');

    /***** 1-Search By Title *****/
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); 
        handleSubmit(searchValue);
        setSearchValue('');
    };
 

    /***** 2-Recent Blogs *****/ 
    const blogs = latestItems(blogContent);    


    /****** 3-Category Names and Quantities ******/
    // Create an object to store category names and their quantities
    const categoryQuantities = {};

    // Iterate over the blogs array
    for (const blog of blogContent) { 
        const category = blog.category.toLowerCase(); // Convert category to lowercase

        // If the category already exists in the object, increment its quantity
        if (categoryQuantities.hasOwnProperty(category)) {
            categoryQuantities[category]++;
        }
        // Otherwise, initialize the quantity to 1
        else {
            categoryQuantities[category] = 1; 
        }
    }

    // Extract the category names and their quantities
    const categoryNames = Object.keys(categoryQuantities);
    const quantities = Object.values(categoryQuantities);
    
    /****** 4-Tag Titles ******/
    const tagTitles = [];
    for (const blog of blogContent) {
        const tags = blog.tags;
        for (const tag of tags) {
            const formattedTag = tag.toLowerCase(); // Convert tag name to lowercase
            if (!tagTitles.includes(formattedTag)) {
                tagTitles.push(formattedTag);
            }
        }
    }
    

    return (  
        <div className='sidebar blog-sidebar'>
    
            {/* Blog Search Bar */}
            <div className='search sidebar-item'>
                
                {/* Sidebar Heading */}
                <SidebarHeading title='search' />
                <div className='box-container'>
                    <form onSubmit={handleSearchSubmit}>
                        {/* Search Input */}
                        <div className='input-box'>
                            <input
                                type='text'
                                id='search'
                                placeholder='Search...'
                                value={searchValue}
                                onChange={handleSearchChange}
                                required
                            />
                            <button type='submit'><BsSearch /></button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Blog Categories */}
            <div className='category sidebar-item'> 
                {/* Sidebar Heading */}
                <SidebarHeading title='categories' />
                <div className='box-container'>
                    {/* Category List */}
                    {categoryNames.map((category, index) => (
                    <Link
                        className={`item ${category.toLowerCase() === selectedCategory.toLowerCase() ? 'active' : ''}`}
                        key={index}
                        to={`/Blogs/category/${category}`}
                    >
                        <span><FaAngleRight className='icon' /> {category}</span>
                        <p>({quantities[index]})</p>
                    </Link>
                    ))}
                </div>
            </div>

            {/* Blog Recent Posts */}
            <div className='recent-post sidebar-item'>
                {/* Sidebar Heading */}
                <SidebarHeading title='recent posts' />
                <div className='box-container'>
                    {/* Recent Post List */}
                    {blogs.map((post) => (
                    <div className='post-item' key={post.id}>
                        <img src={post.image} alt='Event' />
                        <div className='content'>
                            <Link
                                to={{
                                pathname: '/Blogs/' + post.heading,
                                }}
                                state={post}
                                className='main-heading'
                            >
                                {post.heading}
                            </Link>
                            <h3><FaCalendarAlt className='icon' /><span>{post.date}</span></h3>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Blog Tags */}
            <div className='tags sidebar-item'>
                {/* Sidebar Heading */}
                <SidebarHeading title='tags' />
                <div className='box-container'>
                    {/* Tag List */}
                    {tagTitles.map((tag, index) => (
                    <Link
                        className={`tag-item ${tag.toLowerCase() === selectedTag.toLowerCase() ? 'active' : ''}`}
                        key={index}
                        to={`/Blogs/tag/${tag}`}
                    >{tag}
                    </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BlogSidebar;