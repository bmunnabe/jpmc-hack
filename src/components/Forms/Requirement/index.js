import React from 'react'


export default function Requirement() {
  return (
    <div>
    <section className="container">

<header>
<div className="priority-col">
    <label>Task </label>
</div>
<div className="status-col">
    <label>Status </label>
</div>
<div className="progress-col">
    <label>Progress </label>
</div>
<div className="dates-col">
    <label>Dates </label>
</div>
<div className="icon-col">
    <label>Action </label>
</div>
<div className="ref-col">
    <label>References </label>
</div>
</header>


<ul className="task-items">
<li className="item type1">
    <div className="task">
        <div>Go through Requirements/Documents/Confluence to understand bisuness requirement </div>
    </div>
    <div className="status">
        <div className="icon off"> </div>
        <div className="text"> Off Track </div>
    </div>
    <div className="progress">
        <progress value="15" max="100" />
    </div>
    <div className="dates">
        <div className="bar"> </div>
    </div>
    <div className="priority">
        <div className="bar"> </div>
    </div>
    <div className="user" >
        <img src="https://source.unsplash.com/40x40/?coding" alt="Image 001" className="owner-img" />
        <img src="https://source.unsplash.com/40x40/?video" alt="Image 001" className="owner-img" />
        <img src="https://source.unsplash.com/40x40/?video" alt="Image 001" className="owner-img" />
    </div>
</li>

<li className="item type4">
<div className="task">
        <div>JAD with Product Managers for Business requirement</div>
    </div>
    <div className="status">
        <div className="icon warning"> </div>
        <div className="text"> At Risk </div>
    </div>
    <div className="progress">
        <progress value="45" max="100" />
    </div>
    <div className="dates">
        <div className="bar"> </div>
    </div>
    <div className="priority">
        <div className="bar"> </div>
    </div>
    <div className="user">
        <img src="https://source.unsplash.com/40x40/?book" alt="Image 001" className="owner-img" />
    </div>
</li>

<li className="item type2">
    <div className="task">
        <div>Go through Architecture Design given by Architect</div>
    </div>
    <div className="status">
        <div className="icon off"> </div>
        <div className="text"> Off Track </div>
    </div>
    <div className="progress">
        <progress value="10" max="100" />
    </div>
    <div className="dates">
        <div className="bar"> </div>
    </div>
    <div className="priority">
        <div className="bar"> </div>
    </div>
    <div className="user">
        <img src="https://source.unsplash.com/40x40/?video" alt="Image 001" className="owner-img" />
    </div>
</li>

<li className="item type1">
    <div className="task">
        <div>Have meetings with Architect for any clarifications</div>
    </div>

    <div className="status">
        <div className="icon warning"> </div>
        <div className="text"> At Risk </div>
    </div>

    <div className="progress">
        <progress value="35" max="100" />
    </div>

    <div className="dates">
        <div className="bar"> </div>
    </div>

    <div className="priority">
        <div className="bar"> </div>
    </div>

    <div className="user">
        <img src="https://source.unsplash.com/40x40/?american" alt="Image 001" className="owner-img" />
    </div>
</li>		

</ul>

</section>
</div>
  )
}
