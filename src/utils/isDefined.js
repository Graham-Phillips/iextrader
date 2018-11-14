export default function isDefined(obj) {
	if (obj === null || typeof (obj) === 'undefined') {
		return false;
	}

	if (typeof (obj) === typeof ('') && (obj === 'null' || obj === 'undefined')) {
		return false;
	}

	return true;
}
