import { combineReducers } from 'redux'  // 合并reducer
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions.js'
const {  SHOW_ALL } = VisibilityFilters;
 
function visibilityFilter(state = SHOW_ALL, action) { 
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.fliter;
		default : 
			return state;
	}
}

function todos (state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					complete: false
				}
			];
		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					complete: true
				}),
				...state.slice(action.index + 1)
			];
		default:
		return state;
	}
}

// 合并
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp