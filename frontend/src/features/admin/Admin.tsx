import React from 'react';

const Admin = () => {
    return (
        <div className="container my-5">
            <nav>
                <div className="nav nav-tabs" id="nav-tabs" role="tablist">
                    <button className="nav-link active" id="nav-manage-users-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-manage-users"
                            type="button" role="tab" aria-controls="nav-manage-users" aria-selected="true">Manage users
                    </button>

                    <button className="nav-link" id="nav-create-user-tab" data-bs-toggle="tab" data-bs-target="#nav-create-user"
                            type="button" role="tab" aria-controls="nav-create-user" aria-selected="false">Create user
                    </button>

                    <button className="nav-link" id="nav-delete-document-tab" data-bs-toggle="tab" data-bs-target="#nav-delete-document"
                            type="button" role="tab" aria-controls="nav-delete-document" aria-selected="false">Delete document
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active p-3" id="nav-manage-users" role="tabpanel"
                     aria-labelledby="nav-manage-users-tab">
                    <h2>Manage users</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque beatae blanditiis,
                        consequatur dolorem ducimus et, ipsa minima neque non obcaecati praesentium provident
                        quisquam
                        recusandae repellendus temporibus voluptas voluptatem!</p>
                </div>
                <div className="tab-pane fade p-3" id="nav-create-user" role="tabpanel" aria-labelledby="nav-create-user-tab">
                    <h2>Create user</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque beatae blanditiis,
                        consequatur dolorem ducimus et, ipsa minima neque non obcaecati praesentium provident
                        quisquam
                        recusandae repellendus temporibus voluptas voluptatem!</p>
                </div>
                <div className="tab-pane fade p-3" id="nav-delete-document" role="tabpanel" aria-labelledby="nav-delete-document-tab">
                    <h2>Delete document</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque beatae blanditiis,
                        consequatur dolorem ducimus et, ipsa minima neque non obcaecati praesentium provident
                        quisquam
                        recusandae repellendus temporibus voluptas voluptatem!</p>
                </div>
            </div>
        </div>
    );
};

export default Admin;