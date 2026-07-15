print("hello world")

mm = 123
print(id(mm))
mm = "arwfwefwef"
print(id(mm))

list = [[1,2,3], "qwdqwdqw"]
print(list)

listName = [1, 2, 3, 4, 5]
del listName[0]
print(listName) # [2, 3, 4, 5]
value = listName.pop(0)
print(value) # 2
listName.remove(3)
print(listName) # [4, 5]

# 清空列表
listName.clear()
listName.clear()
print(listName) # []

# 统计列表元素出现次数

