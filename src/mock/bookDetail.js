module.exports = 
{
  "rating": {
    "max": 10,
    "numRaters": 404,
    "average": "8.8",
    "min": 0
  },
  "subtitle": "使用muduo C++网络库",
  "author": [
    "陈硕"
  ],
  "pubdate": "2013-1-15",
  "tags": [
    {
      "count": 561,
      "name": "网络编程",
      "title": "网络编程"
    },
    {
      "count": 501,
      "name": "C++",
      "title": "C++"
    },
    {
      "count": 496,
      "name": "Linux",
      "title": "Linux"
    },
    {
      "count": 418,
      "name": "多线程",
      "title": "多线程"
    },
    {
      "count": 138,
      "name": "计算机",
      "title": "计算机"
    },
    {
      "count": 133,
      "name": "编程",
      "title": "编程"
    },
    {
      "count": 77,
      "name": "Networks",
      "title": "Networks"
    },
    {
      "count": 75,
      "name": "Programming",
      "title": "Programming"
    }
  ],
  "origin_title": "",
  "image": "https://img1.doubanio.com\/view\/subject\/m\/public\/s24522799.jpg",
  "binding": "平装",
  "translator": [],
  "catalog": "第1 部分C++ 多线程系统编程1\n第1章 线程安全的对象生命期管理3\n1.1 当析构函数遇到多线程. . . . . . . . . . . . . . . . . . . . . . . . . . . . 3\n1.1.1 线程安全的定义. . . . . . . . . . . . . . . . . . . . . . . . . . . . 4\n1.1.2 MutexLock 与MutexLockGuard . . . . . . . . . . . . . . . . . . . . 4\n1.1.3 一个线程安全的Counter 示例. . . . . . . . . . . . . . . . . . . . 4\n1.2 对象的创建很简单. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5\n1.3 销毁太难. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7\n1.3.1 mutex 不是办法. . . . . . . . . . . . . . . . . . . . . . . . . . . . 7\n1.3.2 作为数据成员的mutex 不能保护析构. . . . . . . . . . . . . . . 8\n1.4 线程安全的Observer 有多难. . . . . . . . . . . . . . . . . . . . . . . . . 8\n1.5 原始指针有何不妥. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11\n1.6 神器shared_ptr\/weak_ptr . . . . . . . . . . . . . . . . . . . . . . . . . . 13\n1.7 插曲：系统地避免各种指针错误. . . . . . . . . . . . . . . . . . . . . . . 14\n1.8 应用到Observer 上. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16\n1.9 再论shared_ptr 的线程安全. . . . . . . . . . . . . . . . . . . . . . . . . 17\n1.10 shared_ptr 技术与陷阱. . . . . . . . . . . . . . . . . . . . . . . . . . . . 19\n1.11 对象池. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21\n1.11.1 enable_shared_from_this . . . . . . . . . . . . . . . . . . . . . . 23\n1.11.2 弱回调. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24\n1.12 替代方案. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26\n1.13 心得与小结. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26\n1.14 Observer 之谬. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28\n第2章 线程同步精要31\n2.1 互斥器（mutex） . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32\n2.1.1 只使用非递归的mutex . . . . . . . . . . . . . . . . . . . . . . . . 33\n2.1.2 死锁. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35\n2.2 条件变量（condition variable） . . . . . . . . . . . . . . . . . . . . . . . 40\n2.3 不要用读写锁和信号量. . . . . . . . . . . . . . . . . . . . . . . . . . . . 43\n2.4 封装MutexLock、MutexLockGuard、Condition . . . . . . . . . . . . . . 44\n2.5 线程安全的Singleton 实现. . . . . . . . . . . . . . . . . . . . . . . . . . 48\n2.6 sleep(3) 不是同步原语. . . . . . . . . . . . . . . . . . . . . . . . . . . . 50\n2.7 归纳与总结. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51\n2.8 借shared_ptr 实现copy-on-write . . . . . . . . . . . . . . . . . . . . . . 52\n第3章 多线程服务器的适用场合与常用编程模型59\n3.1 进程与线程. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59\n3.2 单线程服务器的常用编程模型. . . . . . . . . . . . . . . . . . . . . . . . 61\n3.3 多线程服务器的常用编程模型. . . . . . . . . . . . . . . . . . . . . . . . 62\n3.3.1 one loop per thread . . . . . . . . . . . . . . . . . . . . . . . . . . 62\n3.3.2 线程池. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63\n3.3.3 推荐模式. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64\n3.4 进程间通信只用TCP . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65\n3.5 多线程服务器的适用场合. . . . . . . . . . . . . . . . . . . . . . . . . . . 67\n3.5.1 必须用单线程的场合. . . . . . . . . . . . . . . . . . . . . . . . . 69\n3.5.2 单线程程序的优缺点. . . . . . . . . . . . . . . . . . . . . . . . . 70\n3.5.3 适用多线程程序的场景. . . . . . . . . . . . . . . . . . . . . . . . 71\n3.6 “多线程服务器的适用场合”例释与答疑. . . . . . . . . . . . . . . . . . 74\n第4章 C++ 多线程系统编程精要83\n4.1 基本线程原语的选用. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84\n4.2 C\/C++ 系统库的线程安全性. . . . . . . . . . . . . . . . . . . . . . . . . 85\n4.3 Linux 上的线程标识. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89\n4.4 线程的创建与销毁的守则. . . . . . . . . . . . . . . . . . . . . . . . . . . 91\n4.4.1 pthread_cancel 与C++ . . . . . . . . . . . . . . . . . . . . . . . 94\n4.4.2 exit(3) 在C++ 中不是线程安全的. . . . . . . . . . . . . . . . . 94\n4.5 善用__thread 关键字. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96\n4.6 多线程与IO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98\n4.7 用RAII 包装文件描述符. . . . . . . . . . . . . . . . . . . . . . . . . . . 99\n4.8 RAII 与fork() . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101\n4.9 多线程与fork() . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102\n4.10 多线程与signal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103\n4.11 Linux 新增系统调用的启示. . . . . . . . . . . . . . . . . . . . . . . . . . 105\n第5章 高效的多线程日志107\n5.1 功能需求. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109\n5.2 性能需求. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112\n5.3 多线程异步日志. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114\n5.4 其他方案. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120\n第2部分 muduo 网络库123\n第6章 muduo 网络库简介125\n6.1 由来. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125\n6.2 安装. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127\n6.3 目录结构. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129\n6.3.1 代码结构. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131\n6.3.2 例子. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134\n6.3.3 线程模型. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135\n6.4 使用教程. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136\n6.4.1 TCP 网络编程本质论. . . . . . . . . . . . . . . . . . . . . . . . . 136\n6.4.2 echo 服务的实现. . . . . . . . . . . . . . . . . . . . . . . . . . . 138\n6.4.3 七步实现finger 服务. . . . . . . . . . . . . . . . . . . . . . . . . 140\n6.5 性能评测. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144\n6.5.1 muduo 与Boost.Asio、libevent2 的吞吐量对比. . . . . . . . . . 145\n6.5.2 击鼓传花：对比muduo 与libevent2 的事件处理效率. . . . . . 148\n6.5.3 muduo 与Nginx 的吞吐量对比. . . . . . . . . . . . . . . . . . . 153\n6.5.4 muduo 与ZeroMQ 的延迟对比. . . . . . . . . . . . . . . . . . . 156\n6.6 详解muduo 多线程模型. . . . . . . . . . . . . . . . . . . . . . . . . . . 157\n6.6.1 数独求解服务器. . . . . . . . . . . . . . . . . . . . . . . . . . . . 157\n6.6.2 常见的并发网络服务程序设计方案. . . . . . . . . . . . . . . . . 160\n第7章 muduo 编程示例177\n7.1 五个简单TCP 示例. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 178\n7.2 文件传输. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185\n7.3 Boost.Asio 的聊天服务器. . . . . . . . . . . . . . . . . . . . . . . . . . . 194\n7.3.1 TCP 分包. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 194\n7.3.2 消息格式. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195\n7.3.3 编解码器LengthHeaderCodec . . . . . . . . . . . . . . . . . . . . 197\n7.3.4 服务端的实现. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 198\n7.3.5 客户端的实现. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 200\n7.4 muduo Buffer 类的设计与使用. . . . . . . . . . . . . . . . . . . . . . . 204\n7.4.1 muduo 的IO 模型. . . . . . . . . . . . . . . . . . . . . . . . . . 204\n7.4.2 为什么non-blocking 网络编程中应用层buffer 是必需的. . . . 205\n7.4.3 Buffer 的功能需求. . . . . . . . . . . . . . . . . . . . . . . . . . 207\n7.4.4 Buffer 的数据结构. . . . . . . . . . . . . . . . . . . . . . . . . . 209\n7.4.5 Buffer 的操作. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 211\n7.4.6 其他设计方案. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 217\n7.4.7 性能是不是问题. . . . . . . . . . . . . . . . . . . . . . . . . . . . 218\n7.5 一种自动反射消息类型的Google Protobuf 网络传输方案. . . . . . . . 220\n7.5.1 网络编程中使用Protobuf 的两个先决条件. . . . . . . . . . . . . 220\n7.5.2 根据type name 反射自动创建Message 对象. . . . . . . . . . . . 221\n7.5.3 Protobuf 传输格式. . . . . . . . . . . . . . . . . . . . . . . . . . 226\n7.6 在muduo 中实现Protobuf 编解码器与消息分发器. . . . . . . . . . . . 228\n7.6.1 什么是编解码器（codec） . . . . . . . . . . . . . . . . . . . . . . 229\n7.6.2 实现ProtobufCodec . . . . . . . . . . . . . . . . . . . . . . . . . 232\n7.6.3 消息分发器（dispatcher）有什么用. . . . . . . . . . . . . . . . 232\n7.6.4 ProtobufCodec 与ProtobufDispatcher 的综合运用. . . . . . . 233\n7.6.5 ProtobufDispatcher 的两种实现. . . . . . . . . . . . . . . . . . 234\n7.6.6 ProtobufCodec 和ProtobufDispatcher 有何意义. . . . . . . . . 236\n7.7 限制服务器的最大并发连接数. . . . . . . . . . . . . . . . . . . . . . . . 237\n7.7.1 为什么要限制并发连接数. . . . . . . . . . . . . . . . . . . . . . 237\n7.7.2 在muduo 中限制并发连接数. . . . . . . . . . . . . . . . . . . . 238\n7.8 定时器. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 240\n7.8.1 程序中的时间. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 240\n7.8.2 Linux 时间函数. . . . . . . . . . . . . . . . . . . . . . . . . . . . 241\n7.8.3 muduo 的定时器接口. . . . . . . . . . . . . . . . . . . . . . . . . 242\n7.8.4 Boost.Asio Timer 示例. . . . . . . . . . . . . . . . . . . . . . . . 243\n7.8.5 Java Netty 示例. . . . . . . . . . . . . . . . . . . . . . . . . . . . 245\n7.9 测量两台机器的网络延迟和时间差. . . . . . . . . . . . . . . . . . . . . 248\n7.10 用timing wheel 踢掉空闲连接. . . . . . . . . . . . . . . . . . . . . . . . 250\n7.10.1 timing wheel 原理. . . . . . . . . . . . . . . . . . . . . . . . . . 251\n7.10.2 代码实现与改进. . . . . . . . . . . . . . . . . . . . . . . . . . . . 254\n7.11 简单的消息广播服务. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 257\n7.12 “串并转换”连接服务器及其自动化测试. . . . . . . . . . . . . . . . . . 260\n7.13 socks4a 代理服务器. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 264\n7.13.1 TCP 中继器. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 264\n7.13.2 socks4a 代理服务器. . . . . . . . . . . . . . . . . . . . . . . . . . 267\n7.13.3 N : 1 与1 : N 连接转发. . . . . . . . . . . . . . . . . . . . . . . . 267\n7.14 短址服务. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 267\n7.15 与其他库集成. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 268\n7.15.1 UDNS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 270\n7.15.2 c-ares DNS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 272\n7.15.3 curl . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 273\n7.15.4 更多. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 275\n第8章 muduo 网络库设计与实现277\n8.0 什么都不做的EventLoop . . . . . . . . . . . . . . . . . . . . . . . . . . . 277\n8.1 Reactor 的关键结构. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 280\n8.1.1 Channel class . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 280\n8.1.2 Poller class . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 283\n8.1.3 EventLoop 的改动. . . . . . . . . . . . . . . . . . . . . . . . . . . 287\n8.2 TimerQueue 定时器. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 290\n8.2.1 TimerQueue class . . . . . . . . . . . . . . . . . . . . . . . . . . . 290\n8.2.2 EventLoop 的改动. . . . . . . . . . . . . . . . . . . . . . . . . . . 292\n8.3 EventLoop::runInLoop() 函数. . . . . . . . . . . . . . . . . . . . . . . . 293\n8.3.1 提高TimerQueue 的线程安全性. . . . . . . . . . . . . . . . . . . 296\n8.3.2 EventLoopThread class . . . . . . . . . . . . . . . . . . . . . . . . 297\n8.4 实现TCP 网络库. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 299\n8.5 TcpServer 接受新连接. . . . . . . . . . . . . . . . . . . . . . . . . . . . 303\n8.5.1 TcpServer class . . . . . . . . . . . . . . . . . . . . . . . . . . . . 304\n8.5.2 TcpConnection class . . . . . . . . . . . . . . . . . . . . . . . . . 305\n8.6 TcpConnection 断开连接. . . . . . . . . . . . . . . . . . . . . . . . . . . 308\n8.7 Buffer 读取数据. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 313\n8.7.1 TcpConnection 使用Buffer 作为输入缓冲. . . . . . . . . . . . . 314\n8.7.2 Buffer::readFd() . . . . . . . . . . . . . . . . . . . . . . . . . . 315\n8.8 TcpConnection 发送数据. . . . . . . . . . . . . . . . . . . . . . . . . . . 316\n8.9 完善TcpConnection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 320\n8.9.1 SIGPIPE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 321\n8.9.2 TCP No Delay 和TCP keepalive . . . . . . . . . . . . . . . . . . 321\n8.9.3 WriteCompleteCallback 和HighWaterMarkCallback . . . . . . . 322\n8.10 多线程TcpServer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 324\n8.11 Connector . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 327\n8.12 TcpClient . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 332\n8.13 epoll . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 333\n8.14 测试程序一览. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 336\n第3部分 工程实践经验谈337\n第9章 分布式系统工程实践339\n9.1 我们在技术浪潮中的位置. . . . . . . . . . . . . . . . . . . . . . . . . . . 341\n9.1.1 分布式系统的本质困难. . . . . . . . . . . . . . . . . . . . . . . . 343\n9.1.2 分布式系统是个险恶的问题. . . . . . . . . . . . . . . . . . . . . 344\n9.2 分布式系统的可靠性浅说. . . . . . . . . . . . . . . . . . . . . . . . . . . 349\n9.2.1 分布式系统的软件不要求7  24 可靠. . . . . . . . . . . . . . . . 352\n9.2.2 “能随时重启进程”作为程序设计目标. . . . . . . . . . . . . . . 354\n9.3 分布式系统中心跳协议的设计. . . . . . . . . . . . . . . . . . . . . . . . 356\n9.4 分布式系统中的进程标识. . . . . . . . . . . . . . . . . . . . . . . . . . . 360\n9.4.1 错误做法. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 361\n9.4.2 正确做法. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 362\n9.4.3 TCP 协议的启示. . . . . . . . . . . . . . . . . . . . . . . . . . . . 363\n9.5 构建易于维护的分布式程序. . . . . . . . . . . . . . . . . . . . . . . . . 364\n9.6 为系统演化做准备. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 367\n9.6.1 可扩展的消息格式. . . . . . . . . . . . . . . . . . . . . . . . . . 368\n9.6.2 反面教材：ICE 的消息打包格式. . . . . . . . . . . . . . . . . . . 369\n9.7 分布式程序的自动化回归测试. . . . . . . . . . . . . . . . . . . . . . . . 370\n9.7.1 单元测试的能与不能. . . . . . . . . . . . . . . . . . . . . . . . . 370\n9.7.2 分布式系统测试的要点. . . . . . . . . . . . . . . . . . . . . . . . 373\n9.7.3 分布式系统的抽象观点. . . . . . . . . . . . . . . . . . . . . . . . 374\n9.7.4 一种自动化的回归测试方案. . . . . . . . . . . . . . . . . . . . . 375\n9.7.5 其他用处. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 379\n9.8 分布式系统部署、监控与进程管理的几重境界. . . . . . . . . . . . . . . 380\n9.8.1 境界1：全手工操作. . . . . . . . . . . . . . . . . . . . . . . . . 382\n9.8.2 境界2：使用零散的自动化脚本和第三方组件. . . . . . . . . . . 383\n9.8.3 境界3：自制机群管理系统，集中化配置. . . . . . . . . . . . . 386\n9.8.4 境界4：机群管理与naming service 结合. . . . . . . . . . . . . 389\n第10章 C++ 编译链接模型精要391\n10.1 C 语言的编译模型及其成因. . . . . . . . . . . . . . . . . . . . . . . . . 394\n10.1.1 为什么C 语言需要预处理. . . . . . . . . . . . . . . . . . . . . . 395\n10.1.2 C 语言的编译模型. . . . . . . . . . . . . . . . . . . . . . . . . . . 398\n10.2 C++ 的编译模型. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 399\n10.2.1 单遍编译. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 399\n10.2.2 前向声明. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 402\n10.3 C++ 链接（linking） . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 404\n10.3.1 函数重载. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 406\n10.3.2 inline 函数. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 407\n10.3.3 模板. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 409\n10.3.4 虚函数. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 414\n10.4 工程项目中头文件的使用规则. . . . . . . . . . . . . . . . . . . . . . . . 415\n10.4.1 头文件的害处. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 416\n10.4.2 头文件的使用规则. . . . . . . . . . . . . . . . . . . . . . . . . . 417\n10.5 工程项目中库文件的组织原则. . . . . . . . . . . . . . . . . . . . . . . . 418\n10.5.1 动态库是有害的. . . . . . . . . . . . . . . . . . . . . . . . . . . . 423\n10.5.2 静态库也好不到哪儿去. . . . . . . . . . . . . . . . . . . . . . . . 424\n10.5.3 源码编译是王道. . . . . . . . . . . . . . . . . . . . . . . . . . . . 428\n第11章 反思C++ 面向对象与虚函数429\n11.1 朴实的C++ 设计. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 429\n11.2 程序库的二进制兼容性. . . . . . . . . . . . . . . . . . . . . . . . . . . . 431\n11.2.1 什么是二进制兼容性. . . . . . . . . . . . . . . . . . . . . . . . . 432\n11.2.2 有哪些情况会破坏库的ABI . . . . . . . . . . . . . . . . . . . . . 433\n11.2.3 哪些做法多半是安全的. . . . . . . . . . . . . . . . . . . . . . . . 435\n11.2.4 反面教材：COM . . . . . . . . . . . . . . . . . . . . . . . . . . . 435\n11.2.5 解决办法. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 436\n11.3 避免使用虚函数作为库的接口. . . . . . . . . . . . . . . . . . . . . . . . 436\n11.3.1 C++ 程序库的作者的生存环境. . . . . . . . . . . . . . . . . . . . 437\n11.3.2 虚函数作为库的接口的两大用途. . . . . . . . . . . . . . . . . . 438\n11.3.3 虚函数作为接口的弊端. . . . . . . . . . . . . . . . . . . . . . . . 439\n11.3.4 假如Linux 系统调用以COM 接口方式实现. . . . . . . . . . . . 442\n11.3.5 Java 是如何应对的. . . . . . . . . . . . . . . . . . . . . . . . . . 443\n11.4 动态库接口的推荐做法. . . . . . . . . . . . . . . . . . . . . . . . . . . . 443\n11.5 以boost::function 和boost::bind 取代虚函数. . . . . . . . . . . . . 447\n11.5.1 基本用途. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 450\n11.5.2 对程序库的影响. . . . . . . . . . . . . . . . . . . . . . . . . . . . 451\n11.5.3 对面向对象程序设计的影响. . . . . . . . . . . . . . . . . . . . . 453\n11.6 iostream 的用途与局限. . . . . . . . . . . . . . . . . . . . . . . . . . . . 457\n11.6.1 stdio 格式化输入输出的缺点. . . . . . . . . . . . . . . . . . . . . 457\n11.6.2 iostream 的设计初衷. . . . . . . . . . . . . . . . . . . . . . . . . 461\n11.6.3 iostream 与标准库其他组件的交互. . . . . . . . . . . . . . . . . 463\n11.6.4 iostream 在使用方面的缺点. . . . . . . . . . . . . . . . . . . . . 464\n11.6.5 iostream 在设计方面的缺点. . . . . . . . . . . . . . . . . . . . . 468\n11.6.6 一个300 行的memory buffer output stream . . . . . . . . . . . 476\n11.6.7 现实的C++ 程序如何做文件IO . . . . . . . . . . . . . . . . . . . 480\n11.7 值语义与数据抽象. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 482\n11.7.1 什么是值语义. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 482\n11.7.2 值语义与生命期. . . . . . . . . . . . . . . . . . . . . . . . . . . . 483\n11.7.3 值语义与标准库. . . . . . . . . . . . . . . . . . . . . . . . . . . . 488\n11.7.4 值语义与C++ 语言. . . . . . . . . . . . . . . . . . . . . . . . . . 488\n11.7.5 什么是数据抽象. . . . . . . . . . . . . . . . . . . . . . . . . . . . 490\n11.7.6 数据抽象所需的语言设施. . . . . . . . . . . . . . . . . . . . . . 493\n11.7.7 数据抽象的例子. . . . . . . . . . . . . . . . . . . . . . . . . . . . 495\n第12章 C++ 经验谈501\n12.1 用异或来交换变量是错误的. . . . . . . . . . . . . . . . . . . . . . . . . 501\n12.1.1 编译器会分别生成什么代码. . . . . . . . . . . . . . . . . . . . . 503\n12.1.2 为什么短的代码不一定快. . . . . . . . . . . . . . . . . . . . . . 505\n12.2 不要重载全局::operator new() . . . . . . . . . . . . . . . . . . . . . . 507\n12.2.1 内存管理的基本要求. . . . . . . . . . . . . . . . . . . . . . . . . 507\n12.2.2 重载::operator new() 的理由. . . . . . . . . . . . . . . . . . . 508\n12.2.3 ::operator new() 的两种重载方式. . . . . . . . . . . . . . . . . 508\n12.2.4 现实的开发环境. . . . . . . . . . . . . . . . . . . . . . . . . . . . 509\n12.2.5 重载::operator new() 的困境. . . . . . . . . . . . . . . . . . . 510\n12.2.6 解决办法：替换malloc() . . . . . . . . . . . . . . . . . . . . . . 512\n12.2.7 为单独的class 重载::operator new() 有问题吗. . . . . . . . . 513\n12.2.8 有必要自行定制内存分配器吗. . . . . . . . . . . . . . . . . . . . 513\n12.3 带符号整数的除法与余数. . . . . . . . . . . . . . . . . . . . . . . . . . . 514\n12.3.1 语言标准怎么说. . . . . . . . . . . . . . . . . . . . . . . . . . . . 515\n12.3.2 C\/C++ 编译器的表现. . . . . . . . . . . . . . . . . . . . . . . . . 516\n12.3.3 其他语言的规定. . . . . . . . . . . . . . . . . . . . . . . . . . . . 516\n12.3.4 脚本语言解释器代码. . . . . . . . . . . . . . . . . . . . . . . . . 517\n12.3.5 硬件实现. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 521\n12.4 在单元测试中mock 系统调用. . . . . . . . . . . . . . . . . . . . . . . . 522\n12.4.1 系统函数的依赖注入. . . . . . . . . . . . . . . . . . . . . . . . . 522\n12.4.2 链接期垫片（link seam） . . . . . . . . . . . . . . . . . . . . . . 524\n12.5 慎用匿名namespace . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 526\n12.5.1 C 语言的static 关键字的两种用法. . . . . . . . . . . . . . . . . 526\n12.5.2 C++ 语言的static 关键字的四种用法. . . . . . . . . . . . . . . . 526\n12.5.3 匿名namespace 的不利之处. . . . . . . . . . . . . . . . . . . . . 527\n12.5.4 替代办法. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 529\n12.6 采用有利于版本管理的代码格式. . . . . . . . . . . . . . . . . . . . . . . 529\n12.6.1 对diff 友好的代码格式. . . . . . . . . . . . . . . . . . . . . . . . 530\n12.6.2 对grep 友好的代码风格. . . . . . . . . . . . . . . . . . . . . . . 537\n12.6.3 一切为了效率. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 538\n12.7 再探std::string . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 539\n12.7.1 直接拷贝（eager copy） . . . . . . . . . . . . . . . . . . . . . . . 540\n12.7.2 写时复制（copy-on-write） . . . . . . . . . . . . . . . . . . . . . 542\n12.7.3 短字符串优化（SSO） . . . . . . . . . . . . . . . . . . . . . . . . 543\n12.8 用STL algorithm 轻松解决几道算法面试题. . . . . . . . . . . . . . . . 546\n12.8.1 用next_permutation() 生成排列与组合. . . . . . . . . . . . . . 546\n12.8.2 用unique() 去除连续重复空白. . . . . . . . . . . . . . . . . . . 548\n12.8.3 用{make,push,pop}_heap() 实现多路归并. . . . . . . . . . . . 549\n12.8.4 用partition() 实现“重排数组，让奇数位于偶数前面” . . . . 553\n12.8.5 用lower_bound() 查找IP 地址所属的城市. . . . . . . . . . . . . 554\n第4 部分附录559\n附录A 谈一谈网络编程学习经验561\n附录B 从《C++ Primer（第4 版）》入手学习C++ 579\n附录C 关于Boost 的看法591\n附录D 关于TCP 并发连接的几个思考题与试验593\n参考文献599",
  "pages": "610",
  "images": {
    "small": "https://img1.doubanio.com\/view\/subject\/s\/public\/s24522799.jpg",
    "large": "https://img1.doubanio.com\/view\/subject\/l\/public\/s24522799.jpg",
    "medium": "https://img1.doubanio.com\/view\/subject\/m\/public\/s24522799.jpg"
  },
  "alt": "https:\/\/book.douban.com\/subject\/20471211\/",
  "id": "20471211",
  "publisher": "电子工业出版社",
  "isbn10": "7121192829",
  "isbn13": "9787121192821",
  "title": "Linux多线程服务端编程",
  "url": "https:\/\/api.douban.com\/v2\/book\/20471211",
  "alt_title": "",
  "author_intro": "陈硕，北京师范大学硕士，擅长C++ 多线程网络编程和实时分布式系统架构。曾在摩根士丹利IT 部门工作5 年，从事实时外汇交易系统开发。现在在美国加州硅谷某互联网大公司工作，从事大规模分布式系统的可靠性工程。编写了开源C++ 网络库muduo，参与翻译了《代码大全（ 第2 版）》和《C++ 编程规范（繁体版）》，整理了《C++ Primer （第4 版）（评注版）》，并曾多次在各地技术大会演讲。",
  "summary": "本书主要讲述采用现代C++ 在x86-64 Linux 上编写多线程TCP 网络服务程序的主流常规技术，重点讲解一种适应性较强的多线程服务器的编程模型，即one loop per thread。这是在Linux 下以native 语言编写用户态高性能网络程序最成熟的模式，掌握之后可顺利地开发各类常见的服务端网络应用程序。本书以muduo 网络库为例，讲解这种编程模型的使用方法及注意事项。\n本书的宗旨是贵精不贵多。掌握两种基本的同步原语就可以满足各种多线程同步的功能需求，还能写出更易用的同步设施。掌握一种进程间通信方式和一种多线程网络编程模型就足以应对日常开发任务，编写运行于公司内网环境的分布式服务统。",
  "price": "89.00元"
}