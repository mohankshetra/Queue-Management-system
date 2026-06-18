function NotificationPanel() {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-bold text-xl mb-4">
        Notifications
      </h2>

      <ul className="space-y-3">

        <li>
          Token #101 is serving
        </li>

        <li>
          Counter 2 is available
        </li>

        <li>
          Queue updated
        </li>

      </ul>

    </div>

  );

}

export default NotificationPanel;