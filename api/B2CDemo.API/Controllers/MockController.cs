using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace B2CDemo.API.Controllers
{

	[Authorize]
	public class MockController : Controller
	{

		[HttpGet]
		public IActionResult GetData()
		{
			var list = new List<string>();
			list.Add("Apple");
			list.Add("Grape");
			list.Add("Pear");
			return Json(list.ToArray());
		}
	}
}
