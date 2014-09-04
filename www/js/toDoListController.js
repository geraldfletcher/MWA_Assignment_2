/****************************************
|Gerald Fletcher              			|
|C06414401                     			|
|Webelevate 3.0                		    |
|Mobile Web Applications   				|
|Mobile Web Applications Assignment 2	|
|Due Date: 2014/4/14           			|
*****************************************/
function ToDoController($scope) {
	// two items already on the list
	$scope.toDoListItems=[{name:'Do the shopping', description:'Go to the shop...'}, 
							{name:'Buy tickets', description:'Go online'}
	];

	// function to add items to the list
	$scope.addItemToDo = function () {
		$scope.toDoListItems.push(
			{
				name: $scope.newItem.name,
				description: $scope.newItem.description
			}
		);
		$scope.newItem = ""; // to clear the newItem text after an item is added to the list
	}

	// delete function
	$scope.delete = function ( index ) {

	    $scope.toDoListItems.splice(index, 1);

	};

}