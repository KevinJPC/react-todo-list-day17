import React, { useState } from "react";
import close from "../../img/eliminar-cruz.png";

export function Todos() {
	const [todosList, setTodosList] = useState([]);

	function handleDeleteTask(item) {
		let newTodosList = todosList.slice();
		newTodosList.splice(item, 1);
		setTodosList(newTodosList);
	}

	function handleAddTask(event) {
		if (event.key === "Enter") {
			let newTask = event.target.value;
			if (newTask != "") {
				let newTodosList = todosList.slice();
				newTodosList.push(newTask);
				setTodosList(newTodosList);
				event.target.value = "";
			}
		}
	}

	return (
		<div className="container-fluid">
			<div className="row d-flex flex-column p-3">
				<div className="title-container text-center">
					<h1>todos</h1>
				</div>
				<div className="app-container d-flex flex-column p-0 border col-lg-6 col-md-10 col-sm-11 mx-auto">
					<div>
						<input
							className="w-100 border-bottom pl-5 task py-3"
							type="text"
							placeholder="What needs to be done?"
							onKeyPress={handleAddTask}></input>
					</div>
					{todosList.length != 0 ? (
						todosList.map(function(item, i) {
							return (
								<div
									key={i}
									className="p-0 d-flex border-bottom task-container">
									<div className="col d-flex justify-content-between pt-3 p-0">
										<p className="pl-5 task">{item}</p>
										<span>
											<button className="delete-btn mr-3 text-center">
												<img
													src={close}
													alt="Logo close"
													className="logo-close"
													onClick={() => {
														handleDeleteTask(i);
													}}
												/>
											</button>
										</span>
									</div>
								</div>
							);
						})
					) : (
						<div className="col d-flex justify-content-between pt-3 task border-bottom p-0">
							<p className="pl-5 task">No tasks, add a task</p>
						</div>
					)}
					<div className="p-0 d-flex left-task align-items-center">
						<p className="pl-2 pt-3">
							{todosList.length} item left
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
